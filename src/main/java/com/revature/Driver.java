package com.revature;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.revature.beans.Game;
import com.revature.beans.Score;
import com.revature.beans.User;
import com.revature.beans.Win;
import com.revature.dao.P2DAOImpl;
import com.revature.util.ConnectionUtil;

public class Driver {

	private static P2DAOImpl dao = new P2DAOImpl();
	
	public static void main(String[] args) {
		System.out.println("Booting up");
		System.out.println(ConnectionUtil.getSessionFactory());	
//		SessionFactory sf = ConnectionUtil.getSessionFactory();
//		Session s = sf.openSession();
		setup();
	}

	public static void setup() {
		//Create a user
		User user = new User("Raymond", "Hua");
		System.out.println(dao.addUser(user));
		//Create a game
		Game game = new Game("Flappy Bird");
		System.out.println(dao.addGame(game));
		//Create a score
		System.out.println(dao.addScore(new Score(5, user, game)));
		//Create a win
		System.out.println(dao.addWin(new Win(5, user, game)));
		//Create another user
		user = new User("DJ", "Soyer");
		System.out.println(dao.addUser(user));
		//Try to update a win, if no win exists it adds a win
		Win win = new Win(89, user, game);
		System.out.println(dao.updateWin(win));
	}
}