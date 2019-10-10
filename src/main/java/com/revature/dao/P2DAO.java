package com.revature.dao;

import java.util.List;

import com.revature.beans.Game;
import com.revature.beans.Score;
import com.revature.beans.User;
import com.revature.beans.Win;

public interface P2DAO {
	public boolean addUser(User user);
	public boolean addGame(Game game);
	public boolean addScore(Score score);
	public boolean addWin(Win win);
	public boolean updateWin(Win win);
	public User getUserByUsernamePassword (User user);
	public List<User> getAllUsers();
}
