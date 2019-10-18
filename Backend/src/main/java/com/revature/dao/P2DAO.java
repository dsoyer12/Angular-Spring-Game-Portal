package com.revature.dao;

import java.util.List;

import com.revature.model.Game;
import com.revature.model.Score;
import com.revature.model.User;
import com.revature.model.Win;

public interface P2DAO {
	//CREATE
	public void addUser(User user);

	public void addGame(Game game);
	public void addScore(Score score);
	public void addWin(Win win);
	//GET ALL
	public List<User> getAllUsers();
	public List<Game> getAllGames();
	public List<Score> getAllScores();
	public List<Win> getAllWins();
	//DELETE
	//games and users
	//USER FUNCTIONS
	public User Authenticate (User user);
	//GAME FUNCTIONS
	//SCORE FUNCTIONS
	public List<Score> top10Scores(Game game);
	//WIN FUNCTIONS
	public void updateWin(Win win);
	public List<Win> top10Wins(Game game);

}
