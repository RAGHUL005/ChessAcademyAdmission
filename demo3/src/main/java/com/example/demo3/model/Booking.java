package com.example.demo3.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue
    private int bid;
    private String name;
    private String email;
    private String hallname;
    private String location;
    private String phonenumber;
    private int numberofperson;
    private String date;
    private String food;
    private List<String> activity;
    
    
    public int getBid() {
        return bid;
    }
    public void setBid(int bid) {
        this.bid = bid;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getHallname() {
        return hallname;
    }
    public void setHallname(String hallname) {
        this.hallname = hallname;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getPhonenumber() {
        return phonenumber;
    }
    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }
    public int getNumberofperson() {
        return numberofperson;
    }
    public void setNumberofperson(int numberofperson) {
        this.numberofperson = numberofperson;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getFood() {
        return food;
    }
    public void setFood(String food) {
        this.food = food;
    }
    public List<String> getActivity() {
        return activity;
    }
    public void setActivity(List<String> activity) {
        this.activity = activity;
    }
    
}
