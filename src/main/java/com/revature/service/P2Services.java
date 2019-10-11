package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.P2DAO;
import com.revature.model.Game;
import com.revature.model.Score;
import com.revature.model.User;
import com.revature.model.Win;

@Service
public class P2Services {
	
	private P2DAO dao;
	
	@Autowired
	public P2Services (P2DAO dao) {
		this.dao = dao;
	}
	
	public boolean addUser(User user) {
		return dao.addUser(user);
	}

	public boolean addGame(Game game) {
		return dao.addGame(game);
	}
	public boolean addScore(Score score) {
		return dao.addScore(score);
	}
	public boolean addWin(Win win) {
		return dao.addWin(win);
	}
	public boolean updateWin(Win win) {
		return dao.updateWin(win);
	}
	public User getUserByUsernamePassword (User user) {
		return dao.getUserByUsernamePassword(user);
	}

	public List<User> getAllUsers() {
		return dao.getAllUsers();
	}
	
}
