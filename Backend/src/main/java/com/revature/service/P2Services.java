package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
	//CREATE
	public void addUser(User user) {
		 dao.addUser(user);
	}
	public void addGame(Game game) {
		 dao.addGame(game);
	}
	public void addScore(Score score) {
		 dao.addScore(score);
	}
	public void addWin(Win win) {
		 dao.addWin(win);
	}
	//GET ALL
	public List<User> getAllUsers() {
		 return dao.getAllUsers();
	}
	public List<Game> getAllGames() {
		return dao.getAllGames();
	}
	public List<Score> getAllScores() {
		 return dao.getAllScores();
	}
	public List<Win> getAllWins() {
		return dao.getAllWins();
	}
	//USER FUNCTIONS
	public User Authenticate (User user) {
		 return dao.Authenticate(user);
	}
	//GAME FUNCTIONS
	//SCORE FUNCTIONS
	public List<Win> top10Wins(Game game) {
		return dao.top10Wins(game);
	}
	//WIN FUNCTIONS
	public void updateWin(Win win) {
		 dao.updateWin(win);
	}
	public List<Score> top10Scores(Game game) {
		return dao.top10Scores(game);
	}
}
