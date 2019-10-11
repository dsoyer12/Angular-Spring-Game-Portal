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
	public void addUser(User user) {
		Session s = sf.getCurrentSession();
		s.save(user);
	}

	@Transactional
	@Override
	public void addGame(Game game) {
		Session s = sf.getCurrentSession();
		s.save(game);
	}

	@Transactional
	@Override
	public void addScore(Score score) {
		Session s = sf.getCurrentSession();
		s.save(score);
	}

	@Transactional
	@Override
	public void addWin(Win win) {
		Session s = sf.getCurrentSession();
		s.save(win);
	}

	@Transactional
	@Override
	public void updateWin(Win win) {
		Session s = sf.getCurrentSession();
		//Query to get original WIN, for the WIN_ID
		//"Table name" is actually the class name
        Query query = s.createQuery("FROM Win WHERE USER_ID = :var1 AND GAME_ID = :var2");
        query.setParameter("var1", win.getUser());
        query.setParameter("var2", win.getGame());
        List resultList = query.list();
        if (resultList.size() == 0) {
        	addWin(win);
        }
        Win original = (Win) resultList.get(0);
        //Modify original WIN
        original.setCount(win.getCount());
		s.update(original);
		System.out.println(s.getStatistics());
	}

	@Override
	public User Authenticate(User user) {
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

	@Override
	public List<Game> getAllGames() {
		List<Game> results = null;
		try (Session s = sf.openSession()) {
			results = s.createQuery("FROM Game").getResultList();
	        s.close();
		}
		return results;
	}

	@Override
	public List<Score> getAllScores() {
		List<Score> results = null;
		try (Session s = sf.openSession()) {
			results = s.createQuery("FROM Score").getResultList();
	        s.close();
		}
		return results;
	}

	@Override
	public List<Win> getAllWins() {
		List<Win> results = null;
		try (Session s = sf.openSession()) {
			results = s.createQuery("FROM Win").getResultList();
	        s.close();
		}
		return results;
	}

	@Override
	public List<Score> top10Scores(Game game) {
		List<Score> results = null;
		try (Session s = sf.openSession()) {
			Query query = s.createQuery("FROM Score WHERE GAME_ID = :var1 ORDER BY SCORES");
	        query.setParameter("var1", game.getId());
			results = query.getResultList();
	        s.close();
		}
		return results;
	}

	@Override
	public List<Win> top10Wins(Game game) {
		List<Win> results = null;
		try (Session s = sf.openSession()) {
			Query query = s.createQuery("FROM Win WHERE GAME_ID = :var1 ORDER BY COUNT");
	        query.setParameter("var1", game.getId());
			results = query.getResultList();
	        s.close();
		}
		return results;
	}
}
