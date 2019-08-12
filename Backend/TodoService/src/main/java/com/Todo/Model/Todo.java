package com.Todo.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	public int id;
	public String userName;
	public String desc;
	public boolean checked;
	public Date targetDate;

	public Todo() {
		super();
	}

	public Todo(String userName, String desc, boolean checked, Date targetDate) {
		super();
		this.userName = userName;
		this.desc = desc;
		this.checked = checked;
		this.targetDate = targetDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", userName=" + userName + ", desc=" + desc + ", checked=" + checked + ", targetDate="
				+ targetDate + "]";
	}
	
}
