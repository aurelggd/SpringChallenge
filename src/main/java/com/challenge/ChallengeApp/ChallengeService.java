package com.challenge.ChallengeApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChallengeService {
    private Long nextId = 1L;

    @Autowired
    ChallengeRepository challengeRepository;


    public ChallengeService() {

    }



    public List<Challenge> getAllChallenges() {
        return challengeRepository.findAll();
    }

    public boolean addChallenge(Challenge challenge) {

        if(challenge != null){
            challenge.setId(nextId++);
            challengeRepository.save(challenge);
        }
        else {
            return false;
        }

        return true;
    }

    public Challenge getChallenge(String month) {
        Optional<Challenge> challenge = challengeRepository.findAllByMonthIgnoreCase(month);
        return challenge.orElse(null);
    }


    public boolean updateChallenge(Long id, Challenge updatedChallenge) {
        Optional<Challenge> challenge = challengeRepository.findById(id);

        if(challenge.isPresent()){
            Challenge challengeToUpdate = challenge.get();
            challengeToUpdate.setMonth(updatedChallenge.getMonth());
            challengeToUpdate.setDescription(updatedChallenge.getDescription());
            challengeRepository.save(challengeToUpdate);
            return true;
        }

        return false;
    }

    public boolean deleteChallenge(Long id) {

        Optional<Challenge> challenge = challengeRepository.findById(id);

        if(challenge.isPresent()){
            challengeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
