package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.model.Game;
import com.revature.model.Score;
import com.revature.model.Win;
import com.revature.service.P2Services;

@Controller
@RequestMapping(value = "/score")
public class ScoreController {

	private P2Services p2s;

	@Autowired // setter injection
	public void setP2Services(P2Services p2s) {
		this.p2s = p2s;
	}

	@ResponseBody // tells Spring to skip ViewResolver
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Score>> getAll() {
		return new ResponseEntity<>(this.p2s.getAllScores(), HttpStatus.OK);
	}
	
	@ResponseBody 
	@RequestMapping(value = "/top10", method = RequestMethod.GET)
	public ResponseEntity<List<Score>> getTop10(@RequestBody Game game) {
		return new ResponseEntity<>(this.p2s.top10Scores(game), HttpStatus.OK);
	}

	@ResponseBody
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<String> addScore(@RequestBody Score score) {
		ResponseEntity<String> resp = null;
			try {
				this.p2s.addScore(score);
				resp = new ResponseEntity<>("SCORE CREATED SUCCESSFULLY", HttpStatus.OK);
			} catch(Exception e) {
				e.printStackTrace();
				resp = new ResponseEntity<>("FAILED TO CREATE SCORE", HttpStatus.BAD_REQUEST);
			}
		return resp;
	}
	

}
