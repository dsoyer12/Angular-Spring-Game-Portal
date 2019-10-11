package com.revature.util;

import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class ConnectionUtil {

	private static SessionFactory sessionFactory;

	public static SessionFactory getSessionFactory() {
		try {
			if(sessionFactory == null) {
				Configuration c = new Configuration();
				c.setProperty("hibernate.connection.username", System.getenv("DB_USERNAME"));
				c.setProperty("hibernate.connection.password", System.getenv("DB_PASSWORD"));
				c.setProperty("hibernate.connection.url", System.getenv("DB_URL")); 	
				c.configure();

				sessionFactory = c.buildSessionFactory();
			}
		} catch(HibernateException exception){
		     System.out.println("Problem creating session factory");
		     exception.printStackTrace();
		}
		return sessionFactory;
	}
}
