package com.revature.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.revature.OrmConfiguration;
import com.revature.model.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = OrmConfiguration.class)
public class P2ServiceTest {

	private P2Services service;
	
	@Autowired
	public void setCredential(P2Services service) {
		this.service = service;
	}

	@Test
	public void testAuthenticate() {
		User test = service.Authenticate(new User ("Raymond", "Hua"));
		assertEquals(test.getUser_id(), 1);
	}
	
	@Test
	public void testTop10Scores() {
		List<Score> test = service.top10Scores(new Game(2, ""));
		assertEquals(test.size(), 10);
	}
	
	@Test
	public void testUserScores() {
		List<Score> test = service.getUserScores(new User (1, "Raymond", "Hua"), new Game(2, ""));
		boolean isUser = true;
		for (Score i : test)
			if(i.getUser().getUser_id() != 1)
				isUser = false;
		assertEquals(isUser, true);
	}

	@Test
	public void testGetUserWins() {
		List<Win> test = service.getUserWins(new User (1, "Raymond", "Hua"), new Game(3, ""));
		boolean isUser = true;
		for (Win i : test)
			if(i.getUser().getUser_id() != 1)
				isUser = false;
		assertEquals(isUser, true);
	}
	
	@Test
	public void testUpdateWins() {
		List<Win> test = service.getUserWins(new User (1, "Raymond", "Hua"), new Game(3, ""));
		Win tester = test.get(0);
		int previous = tester.getCount();
		service.updateWin(new Win (0, new User (1, "Raymond", "Hua"), new Game(3, "")));
		test = service.getUserWins(new User (1, "Raymond", "Hua"), new Game(3, ""));
		tester = test.get(0);
		int current = tester.getCount();
		assertEquals(previous, current-1);
	}
	
	@Test
	public void testAddUser() {
		service.addUser(new User ("Emily", "Higgins"));
		List<User> test = service.getAllUsers();
		boolean isUser = false;
		for (User i : test)
			if(i.getUsername().equals("Emily") && i.getPassword().equals("Higgins")) {
				isUser = true;
				break;
			}
		assertEquals(isUser, true);
	}
}