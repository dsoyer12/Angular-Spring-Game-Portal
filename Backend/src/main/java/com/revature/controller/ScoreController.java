package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Game;
import com.revature.model.Score;
import com.revature.model.User;
import com.revature.service.P2Services;

@Controller
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/score")
public class ScoreController {

	private P2Services p2s;

	@Autowired // setter injection
	public void setP2Services(P2Services p2s) {
		this.p2s = p2s;
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Score>> getAll() {
		return new ResponseEntity<>(this.p2s.getAllScores(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/top10", method = RequestMethod.GET)
	public ResponseEntity<List<Score>> getTop10(@RequestParam int id) {
		return new ResponseEntity<>(this.p2s.top10Scores(new Game(id, "")), HttpStatus.OK);
	}


	@RequestMapping(value = "/add",method=RequestMethod.GET)
	public ResponseEntity<String> addScore(@RequestParam int scores, @RequestParam int user_id, @RequestParam int id) {
		ResponseEntity<String> resp = null;
			try {
				Score input = new Score(scores, new User(user_id, "", ""), new Game(id, ""));
				this.p2s.addScore(input);
				resp = new ResponseEntity<>("SCORE CREATED SUCCESSFULLY", HttpStatus.OK);
			} catch(Exception e) {
				e.printStackTrace();
				resp = new ResponseEntity<>("FAILED TO CREATE SCORE", HttpStatus.BAD_REQUEST);
			}
		return resp;
	}
	
	@RequestMapping(value = "/user", method=RequestMethod.GET)
	public ResponseEntity<List<Score>> userScore(@RequestParam int user_id, @RequestParam int id) {
		return new ResponseEntity<>(this.p2s.getUserScores(new User(user_id, "", ""), new Game(id, "")), HttpStatus.OK);
	}
}
