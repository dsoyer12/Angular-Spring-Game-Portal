package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.model.User;
import com.revature.service.P2Services;

@Controller
@RequestMapping(value = "/login")
public class LoginController {

	private P2Services p2s;

	@Autowired // setter injection
	public void setP2Services(P2Services p2s) {
		this.p2s = p2s;
	}
	
	@ResponseBody // tells Spring to skip ViewResolver
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<User> Authenticate(@RequestBody User user) {
		return new ResponseEntity<>(this.p2s.Authenticate(user), HttpStatus.OK);
	}

}
