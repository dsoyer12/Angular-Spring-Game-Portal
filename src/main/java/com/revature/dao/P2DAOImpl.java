package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.model.Game;
import com.revature.model.Score;
import com.revature.model.User;
import com.revature.model.Win;

@Repository(value="P2DAO")
public class P2DAOImpl implements P2DAO {

	private SessionFactory sf;
	
	@Autowired //constructor injection
	public P2DAOImpl(SessionFactory sf) {
		this.sf = sf;
	}
	
	@Transactional
	@Override
	public boolean addUser(User user) {
		boolean added = false;
		try (Session s = sf.getCurrentSession()) {
			//Transaction tx = s.beginTransaction();
			s.persist(user);
			//tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	@Transactional
	@Override
	public boolean addGame(Game game) {
		boolean added = false;
		try (Session s = sf.getCurrentSession()) {
			//Transaction tx = s.beginTransaction();
			s.persist(game);
			//tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	@Transactional
	@Override
	public boolean addScore(Score score) {
		boolean added = false;
		try (Session s = sf.getCurrentSession()) {
			//Transaction tx = s.beginTransaction();
			s.save(score);
			//tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	@Transactional
	@Override
	public boolean addWin(Win win) {
		boolean added = false;
		try (Session s = sf.getCurrentSession()) {
			//Transaction tx = s.beginTransaction();
			s.save(win);
			//tx.commit();
			added = true;
			System.out.println(s.getStatistics());
		}
		return added;
	}

	@Transactional
	@Override
	public boolean updateWin(Win win) {
		boolean updated = false;
		try (Session s = sf.getCurrentSession()) {
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
	        //Transaction tx = s.beginTransaction();
	        original.setCount(win.getCount());
			s.update(original);
			//tx.commit();
			updated = true;
			System.out.println(s.getStatistics());
		}
		return updated;
	}

	@Override
	public User getUserByUsernamePassword(User user) {
		User target = null;
		try (Session s = sf.openSession()) {
			//Query to get full USER
			//"Table name" is actually the class name
	        Query query = s.createQuery("FROM User WHERE USERNAME = :var1 AND PASSWORD = :var2");
	        query.setParameter("var1", user.getUsername());
	        query.setParameter("var2", user.getPassword());
	        List resultList = query.list();
	        if (resultList.size() == 0) {
	        	return user;
	        }
	        target = (User) resultList.get(0);	       
			System.out.println(s.getStatistics());
		}
		return target;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> results = null;
		try (Session s = sf.openSession()) {
			//Query to get all USERs
			//"Table name" is actually the class name
			results = s.createQuery("FROM User").getResultList();
	        s.close();
		}
		return results;
	}
}
