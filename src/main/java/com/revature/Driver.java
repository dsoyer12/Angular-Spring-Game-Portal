package com.revature;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Game;
import com.revature.beans.Score;
import com.revature.beans.User;
import com.revature.beans.Win;
import com.revature.service.P2Services;

public class Driver {

	private static P2Services service;
		
	@Autowired
	public Driver (P2Services service) {
		this.service = service;
	}
	
	private static OrmConfiguration orm;
	
	@Autowired
	public Driver (OrmConfiguration orm) {
		this.orm = orm;
	}
	
	public static void main(String[] args) {
		System.out.println("Booting up");
		System.out.println(orm.sessionFactory());	
		SessionFactory sf = (SessionFactory) orm.sessionFactory();
		Session s = sf.openSession();
		System.out.println(service.getAllUsers());
		//setup();
	}

	public static void setup() {
		//Create a user
		User user = new User("Raymond", "Hua");
		System.out.println(service.addUser(user));
		//Create a game
		Game game = new Game("Flappy Bird");
		System.out.println(service.addGame(game));
		//Create a score
		System.out.println(service.addScore(new Score(5, user, game)));
		//Create a win
		System.out.println(service.addWin(new Win(5, user, game)));
		//Create another user
		user = new User("DJ", "Soyer");
		System.out.println(service.addUser(user));
		//Try to update a win, if no win exists it adds a win
		Win win = new Win(89, user, game);
		System.out.println(service.updateWin(win));
	}
}