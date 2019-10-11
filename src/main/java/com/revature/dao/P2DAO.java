package com.revature.dao;

import java.util.List;

import com.revature.model.Game;
import com.revature.model.Score;
import com.revature.model.User;
import com.revature.model.Win;

public interface P2DAO {
	public void addUser(User user);
	public void addGame(Game game);
	public void addScore(Score score);
	public void addWin(Win win);
	public void updateWin(Win win);
	public User getUserByUsernamePassword (User user);
	public List<User> getAllUsers();
	public List<Game> getAllGames();
	public List<Score> getAllScores();
	public List<Win> getAllWins();
}
