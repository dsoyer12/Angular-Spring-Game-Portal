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
@Table(name="WIN")
public class Win {
	//CONSTRUCTORS
	public Win() {
		super();
	}
	public Win(int count, User user, Game game) {
		super();
		this.count = count;
		this.user = user;
		this.game = game;
	}
	public Win(int id, int count, User user, Game game) {
		super();
		this.id = id;
		this.count = count;
		this.user = user;
		this.game = game;
	}
	//STATE
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="winSequence")
	@SequenceGenerator(allocationSize=1, name="winSequence", sequenceName="SQ_WIN_PK")
	@Column(name="WIN_ID")
	private int id;
	@Column(name="COUNT")
	private int count;
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
	public int getCount() {
		return count;
	}
	public void setCount(int wins) {
		this.count = wins;
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
		result = prime * result + count;
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
		Win other = (Win) obj;
		if (game == null) {
			if (other.game != null)
				return false;
		} else if (!game.equals(other.game))
			return false;
		if (id != other.id)
			return false;
		if (count != other.count)
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
		return "Win [id=" + id + ", count=" + count + ", user=" + user + ", game=" + game + "]";
	}
}