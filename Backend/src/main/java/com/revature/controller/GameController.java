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
import com.revature.service.P2Services;

@Controller
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/game")
public class GameController {

	private P2Services p2s;

	@Autowired // setter injection
	public void setP2Services(P2Services p2s) {
		this.p2s = p2s;
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Game>> getAll() {
		return new ResponseEntity<>(this.p2s.getAllGames(), HttpStatus.OK);
	}

	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<String> addGame(@RequestParam String description){
		ResponseEntity<String> resp = null;
			try {
				this.p2s.addGame(new Game(description));
				resp = new ResponseEntity<>("GAME CREATED SUCCESSFULLY", HttpStatus.OK);
			} catch(Exception e) {
				e.printStackTrace();
				resp = new ResponseEntity<>("FAILED TO CREATE GAME", HttpStatus.BAD_REQUEST);
			}
		return resp;
	}
	

}
