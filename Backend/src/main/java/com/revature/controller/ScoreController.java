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
import org.springframework.web.bind.annotation.RequestParam;

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


	@RequestMapping(value = "/add",method=RequestMethod.POST)
	public ResponseEntity<String> addScore(@RequestParam int user_id, @RequestParam int score,@RequestParam int game_id) {
		ResponseEntity<String> resp = null;
			try {
				User curruser = null;
				List <User>users = this.p2s.getAllUsers();
				for(User user: users) {
					if (user.getUser_id() == user_id) {
						curruser = user;
						System.out.println(curruser);
						
					}
					Game currgame = null;
					List <Game>games = this.p2s.getAllGames();
					Score newscore = null;
					for(Game game: games) {
						if (game.getId() == game_id) {
							currgame = game;
							System.out.println(currgame);
							
						}
						newscore = new Score(score,curruser,currgame);
						System.out.println(newscore);
					
				}
					if (newscore != null) {this.p2s.addScore(newscore);
					resp = new ResponseEntity<>("SCORE CREATED SUCCESSFULLY", HttpStatus.OK);}
				
				
				}} catch(Exception e) {

				e.printStackTrace();
				resp = new ResponseEntity<>("FAILED TO CREATE SCORE", HttpStatus.BAD_REQUEST);
			}
		return resp;
	}
	

}
