package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Game")
public class Game {
	//CONSTRUCTORS
	public Game() {
		super();
	}
	public Game(String description) {
		super();
		this.description = description;
	}
	public Game(int id, String description) {
		super();
		this.id = id;
		this.description = description;
	}
	//STATE
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="gameSequence")
	@SequenceGenerator(allocationSize=1, name="gameSequence", sequenceName="SQ_GAME_PK")
	@Column(name="GAME_ID")
	private int id;
	@Column(name="DESCRIPTION")
	private String description;
	//BEHAVIOR
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
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
		Game other = (Game) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Game [id=" + id + ", description=" + description + "]";
	}
}