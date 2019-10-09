package com.revature.dao;

import java.util.ArrayList;
import java.util.List;

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
			s.save(score);
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
			s.save(win);
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
			//Query to get original WIN, for the WIN_ID
			//"Table name" is actually the class name
	        Query query = s.createQuery("FROM Win WHERE USER_ID = :var1 AND GAME_ID = :var2");
	        query.setParameter("var1", win.getUser());
	        query.setParameter("var2", win.getGame());
	        List resultList = query.list();
	        if (resultList.size() == 0) {
	        	addWin(win);
	        	return updated;
	        }
	        Win original = (Win) resultList.get(0);
	        //Modify original WIN
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
