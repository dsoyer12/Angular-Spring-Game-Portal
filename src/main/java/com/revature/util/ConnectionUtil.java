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
				c.setProperty("hibernate.connection.username", System.getenv("DEMO_DB_USERNAME"));
				c.setProperty("hibernate.connection.password", System.getenv("DEMO_DB_PASSWORD"));
				c.setProperty("hibernate.connection.url", System.getenv("HEY_WORK")); //Changed mine to this
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
