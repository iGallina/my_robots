#!/bin/bash
COUNTER=0
TIMEOUT=30
USER_AGENT="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11"
while [ true ]; do
    echo Rodando $COUNTER;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/4231465   --user-agent= --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/4234739   --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/2fa2c6963c6b39861f7d   --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/4217857   --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/fed9e91d9c2d9bcd7322  --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/6b0f924b9cec297b33cb  --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/249a7a101f8069f94d96  --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/2582 --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/a9514dd4965d43479b18 --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/c0c72973e35962db255a --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/4242547  --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/4231465 --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    sleep 1;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/4242547/09906cabaa46d70ade17 --user-agent=$USER_AGENT --max-redirect 1 --timeout=$TIMEOUT --random-wait;
    let COUNTER=COUNTER+1;
    sleep 18;
done