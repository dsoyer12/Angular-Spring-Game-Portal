    --RESET DB
    ALTER TABLE SCORE DROP COLUMN GAME_ID;
    ALTER TABLE SCORE DROP COLUMN USER_ID;
    DROP TABLE SCORE;
    ALTER TABLE WIN DROP COLUMN USER_ID;
    ALTER TABLE WIN DROP COLUMN GAME_ID;
    DROP TABLE WIN;
    DROP TABLE USER_;
    DROP TABLE GAME;
    
    --CREATE TABLES
    CREATE TABLE USER_(
        USER_ID INTEGER PRIMARY KEY,
        USERNAME VARCHAR2(100), 
        PASSWORD VARCHAR2(100)
    );
    /
    CREATE TABLE GAME(
        GAME_ID INTEGER PRIMARY KEY,
        DESCRIPTION VARCHAR(100)
    );
    /
    CREATE TABLE SCORE(
        SCORE_ID INTEGER PRIMARY KEY,
        SCORES INTEGER, 
        USER_ID INTEGER,
        GAME_ID INTEGER
    );
    /
    CREATE TABLE WIN(
        WIN_ID INTEGER PRIMARY KEY,
        COUNT_ INTEGER, 
        USER_ID INTEGER,
        GAME_ID INTEGER
    );
    /
    --Use sequences to generate USER_ID and BANK_ACCOUNT_ID.
    DROP SEQUENCE U_INC;
    DROP SEQUENCE G_INC;
    DROP SEQUENCE S_INC;
    DROP SEQUENCE W_INC;
    
    CREATE SEQUENCE U_INC
    START WITH 1
    INCREMENT BY 1;
    /
    CREATE SEQUENCE G_INC
    START WITH 1
    INCREMENT BY 1;
    /
     CREATE SEQUENCE S_INC
    START WITH 1
    INCREMENT BY 1;
    /
    CREATE SEQUENCE W_INC
    START WITH 1
    INCREMENT BY 1;
    /
    
    --Triggers
    CREATE OR REPLACE TRIGGER U_TRIG
    BEFORE INSERT ON USER_
    FOR EACH ROW
    BEGIN
       SELECT U_INC.NEXTVAL INTO :NEW.USER_ID FROM DUAL;
    END;
    /
    CREATE OR REPLACE TRIGGER G_TRIG
    BEFORE INSERT ON GAME
    FOR EACH ROW
    BEGIN
       SELECT G_INC.NEXTVAL INTO :NEW.GAME_ID FROM DUAL;
    END;
    /
    CREATE OR REPLACE TRIGGER S_TRIG
    BEFORE INSERT ON SCORE
    FOR EACH ROW
    BEGIN
       SELECT S_INC.NEXTVAL INTO :NEW.SCORE_ID FROM DUAL;
    END;
    /
    CREATE OR REPLACE TRIGGER W_TRIG
    BEFORE INSERT ON WIN
    FOR EACH ROW
    BEGIN
       SELECT W_INC.NEXTVAL INTO :NEW.WIN_ID FROM DUAL;
    END;
    /
    
    --FK
    ALTER TABLE SCORE
    ADD CONSTRAINT FK_USER_SCORE
    FOREIGN KEY (USER_ID) REFERENCES USER_(USER_ID);
    / 
    ALTER TABLE SCORE
    ADD CONSTRAINT FK_GAME_SCORE
    FOREIGN KEY (GAME_ID) REFERENCES GAME(GAME_ID);
    / 
    ALTER TABLE WIN
    ADD CONSTRAINT FK_USER_WIN
    FOREIGN KEY (USER_ID) REFERENCES USER_(USER_ID);
    / 
    ALTER TABLE WIN
    ADD CONSTRAINT FK_GAME_WIN
    FOREIGN KEY (GAME_ID) REFERENCES GAME(GAME_ID);
    / 
    
    --ALTER
    
    --INSERT
    INSERT ALL
    INTO USER_(USERNAME, PASSWORD)
    VALUES ('Raymond', 'Hua')
    INTO USER_(USERNAME, PASSWORD)
    VALUES ('DJ', 'Soyer')
    INTO USER_(USERNAME, PASSWORD)
    VALUES ('Ilya', 'S')
    INTO USER_(USERNAME, PASSWORD)
    VALUES ('Kanh', 'D')
    INTO USER_(USERNAME, PASSWORD)
    VALUES ('George', 'I')
    SELECT * FROM DUAL;
    /
    
    INSERT ALL
    INTO GAME(DESCRIPTION)
    VALUES ('Pang')
    INTO GAME(DESCRIPTION)
    VALUES ('FloppyBird')
    INTO GAME(DESCRIPTION)
    VALUES ('TacTic')
    INTO GAME(DESCRIPTION)
    VALUES ('Tetris')
    INTO GAME(DESCRIPTION)
    VALUES ('BattleShips')
    SELECT * FROM DUAL;
    /
    
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (15, 4, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (12, 4, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (58, 3, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (51, 4, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (29, 2, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (86, 1, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (74, 3, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (54, 1, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (44, 5, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (89, 3, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (24, 2, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (43, 3, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (47, 1, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (14, 4, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (8, 2, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (64, 5, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (15, 5, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (50, 3, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (59, 4, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (2, 2, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (34, 1, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (24, 5, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (86, 4, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (14, 2, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (77, 2, 2);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (12, 4, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (87, 4, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (21, 3, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (32, 3, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (22, 5, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (3, 2, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (62, 4, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (47, 4, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (8, 1, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (50, 3, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (76, 1, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (94, 3, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (6, 1, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (11, 5, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (64, 1, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (19, 1, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (56, 5, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (81, 3, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (51, 4, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (73, 5, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (43, 2, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (77, 1, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (87, 4, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (5, 4, 4);
    insert into SCORE (SCORES, USER_ID, GAME_ID) values (16, 4, 4);

    insert into WIN (COUNT_, USER_ID, GAME_ID) values (16, 1, 1);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (6, 1, 3);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (316, 1, 5);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (146, 2, 1);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (64, 2, 3);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (316, 2, 5);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (164, 3, 1);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (126, 3, 3);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (26, 3, 5);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (16, 4, 1);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (166, 4, 3);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (161, 4, 5);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (1633, 5, 1);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (156, 5, 3);
    insert into WIN (COUNT_, USER_ID, GAME_ID) values (156, 5, 5);

    COMMIT;