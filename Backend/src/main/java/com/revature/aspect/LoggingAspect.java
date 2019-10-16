package com.revature.aspect;

import org.apache.log4j.Logger;
import java.security.Principal;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.revature.model.Score;
import com.revature.model.User;

@Aspect // marks class as containing advice, prevents autoproxying (from AspectJ!)
@Component // stereotype indicating that LoggingAspect is a Spring bean
public class LoggingAspect<UserDetails> {

	// could create Logger as a bean and inject it
	private static Logger log = Logger.getRootLogger();
	
	// INFO log when a method is executed with no incident
	// ERROR log when exception is thrown
	// WARN log when "chase" is called (proof-of-concept for pattern matching)

	// after any method in service package executes normally
	@AfterReturning(pointcut = "within(com.revature.service.*)")
	public void logAfterReturn(JoinPoint jp) {
		System.out.println("in logAfterReturn");
		log.info(jp.getSignature());
	}

	// after any method in any package throws any Throwable
	@AfterThrowing(pointcut = "within(*)", throwing = "t")
	public void logAfterThrow(JoinPoint jp, Throwable t) {
		log.error(jp.getSignature() + " threw " + t.getClass() + " with stack trace: " + t.getStackTrace());
	}
	
	/*
	// after any method in service package executes normally
    @AfterReturning(pointcut = "within(com.revature.service.*)")
    public void logAfterReturnService(JoinPoint jp) {
        System.out.println("in logAfterReturn");
        log.info(jp.getSignature() + "executed with no incident");
    }*/

	// logging scores
	// use Around advice to control whether chase() ever finishes executing
	// careful... this is interacting with application logic, not sticking to cross-cutting concerns.
	@Around("execution(* com.revature.service.P2Services.Authenticate(..))")
	public void logScore(ProceedingJoinPoint pjp) throws Throwable {
		Score a1 = (Score) pjp.getArgs()[0]; 
		Score a2 = (Score) pjp.getArgs()[1];
		log.info(a1 + " is logging " + a2);
		if (a1.getScores() > a2.getScores()) {
			log.warn(a1 +" is logging better score "+ a2);
			pjp.proceed(); // decides whether method executes
		} else {
			log.info(a2 + " logging failed");
		}
	}
	
	
	// logging user authentication
	/*@AfterReturning(pointcut= "within(com.revature.service.*)", returning="result")
	public void logAuthentication(JoinPoint jp,Object result) throws Throwable {
		log.info(">>> user: " + ((Authentication) result).getName() + " succesfully logged in.");
	}*/

	/*
	// maybe use @After instead
	@After("execution(* com.revature.service.*)") 
	 public void logAuth() { 
	 log.info(">>> user " + SecurityContextHolder.getContext().getAuthentication().getName() + " succesfully logged in."); 
	}*/
	
	
	/*
	public void logAuth(HttpServletRequest req, String username, String password) 
	{
		UsernamePasswordAuthenticationToken authReq
		 = new UsernamePasswordAuthenticationToken(username, password);
		
	    Authentication auth = authManager.authenticate(authReq);

	    SecurityContext sc = SecurityContextHolder.getContext();
	    sc.setAuthentication(auth);
	    HttpSession session = req.getSession(true);
	    session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, sc);
	}*/

}