package com.revature.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.revature.beans.Game;
import com.revature.beans.Score;
import com.revature.beans.User;
import com.revature.beans.Win;
import com.revature.util.ConnectionUtil;

public class P2DAOImpl implements P2DAO {

	private SessionFactory sf = ConnectionUtil.getSessionFactory();
	
	@Override
	public boolean addUser(User user) {
		boolean added = false;
		try (Session s = sf.openSession()) {
			Transaction tx = s.beginTransaction();
			s.persist(user);
			tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	public boolean addGame(Game game) {
		boolean added = false;
		try (Session s = sf.openSession()) {
			Transaction tx = s.beginTransaction();
			s.persist(game);
			tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	public boolean addScore(Score score) {
		boolean added = false;
		try (Session s = sf.openSession()) {
			Transaction tx = s.beginTransaction();
			s.persist(score);
			tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	public boolean addWin(Win win) {
		boolean added = false;
		try (Session s = sf.openSession()) {
			Transaction tx = s.beginTransaction();
			s.persist(win);
			tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	@Override
	public boolean updateWin(Win win) {
		boolean updated = false;
		try (Session s = sf.openSession()) {
			//Query to get original WIN
	        Query query = s.createQuery("SELECT * FROM WIN WHERE USER_ID = :var1 AND GAME_ID = :var2");
	        query.setParameter("var1", win.getUser());
	        query.setParameter("var2", win.getGame());
	        Win original = (Win) query.getSingleResult();
	        Transaction tx = s.beginTransaction();
	        original.setCount(win.getCount());
			s.update(original);
			tx.commit();
			updated = true;
			System.out.println(s.getStatistics());
		}
		return updated;
	}

}
