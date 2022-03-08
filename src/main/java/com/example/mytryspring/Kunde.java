package com.example.mytryspring;

public class Kunde {
    private String navn;
    private String adresse;


    public Kunde(String adresse, String navn){
        this.navn = navn;
        this.adresse = adresse;
    }

    public Kunde(){

    }

    public String getNavn(){
        return navn;
    }
    public void setNavn(String navn){
        this.navn = navn;
    }

    public String getAdresse(){
        return adresse;
    }
    public void setAdresse(String adresse){
        this.adresse = adresse;
    }
}


