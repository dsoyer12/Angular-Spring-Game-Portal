package com.revature.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="SCORE")
public class Score {
	//CONSTRUCTORS
	public Score() {
		super();
	}
	public Score(int scores, User user, Game game) {
		super();
		this.scores = scores;
		this.user = user;
		this.game = game;
	}
	public Score(int id, int scores, User user, Game game) {
		super();
		this.id = id;
		this.scores = scores;
		this.user = user;
		this.game = game;
	}
	//STATE
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="scoreSequence")
	@SequenceGenerator(allocationSize=1, name="scoreSequence", sequenceName="SQ_SCORE_PK")
	@Column(name="SCORE_ID")
	private int id;
	@Column(name="SCORES")
	private int scores;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.PERSIST)
	@JoinColumn(name="USER_ID ")
	private User user;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.PERSIST)
	@JoinColumn(name="GAME_ID ")
	private Game game;
	//BEHAVIOR
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getScores() {
		return scores;
	}
	public void setScores(int scores) {
		this.scores = scores;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Game getGame() {
		return game;
	}
	public void setGame(Game game) {
		this.game = game;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((game == null) ? 0 : game.hashCode());
		result = prime * result + id;
		result = prime * result + scores;
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Score other = (Score) obj;
		if (game == null) {
			if (other.game != null)
				return false;
		} else if (!game.equals(other.game))
			return false;
		if (id != other.id)
			return false;
		if (scores != other.scores)
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Score [id=" + id + ", scores=" + scores + ", user=" + user + ", game=" + game + "]";
	}
}