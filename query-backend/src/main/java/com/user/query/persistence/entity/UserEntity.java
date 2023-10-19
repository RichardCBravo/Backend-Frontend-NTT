package com.user.query.persistence.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserEntity {
    //    In the test, only the type of document and the identification number are specified,
    //    the other data of the person is created.
    private final String idNumber = "23445322";
    private final Character idType = 'C';
    private final String firstName = "Roberto";
    private final String secondName = "Carlos";
    private final String fistLastName = "Maria";
    private final String secondLastName = "Socorro";
    private final String phone = "555555555";
    private final String address = "Av Siempreviva 742";
    private final String city = "Saltadilla";

}
