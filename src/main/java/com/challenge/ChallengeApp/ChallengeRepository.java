package com.challenge.ChallengeApp;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//Ceci est un commentaire test
//CRUD
public interface ChallengeRepository extends JpaRepository<Challenge, Long> {

    Optional<Challenge> findAllByMonthIgnoreCase(String month);
}
