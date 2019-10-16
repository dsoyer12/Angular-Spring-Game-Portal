package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.User;
import com.revature.service.P2Services;

@Controller
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/user")
public class UserController {

	private P2Services p2s;

	@Autowired // setter injection
	public void setP2Services(P2Services p2s) {
		this.p2s = p2s;
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getAll() {
		return new ResponseEntity<>(this.p2s.getAllUsers(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ResponseEntity<User> Authenticate(@RequestParam int user_id, @RequestParam String username, @RequestParam String password) {
		return new ResponseEntity<>(this.p2s.Authenticate(new User(user_id, username, password)), HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<String> addUser(@RequestParam String username, @RequestParam String password) {
		ResponseEntity<String> resp = null;
			try {
				this.p2s.addUser(new User(username, password));
				resp = new ResponseEntity<>("USER CREATED SUCCESSFULLY", HttpStatus.OK);
			} catch(Exception e) {
				e.printStackTrace();
				resp = new ResponseEntity<>("FAILED TO CREATE USER", HttpStatus.BAD_REQUEST);
			}
		return resp;
	}
	

}