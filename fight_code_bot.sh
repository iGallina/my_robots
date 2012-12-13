#!/bin/bash
COUNTER=0
while [  $COUNTER -lt 10000 ]; do
    echo Rodando $COUNTER;
    # random fight el mariachi
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/3286/?   --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 2 --timeout=3 --tries=3 --random-wait;
    sleep 1;
    #random fight dojobot_0.1
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/4662/?   --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 2 --timeout=3 --tries=3 --random-wait;
    sleep 1;
    #random fight runwallestrun
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/3157/?   --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 2 --timeout=3 --tries=3 --random-wait;
    sleep 28;
    # El mariachi VS Barbarian
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/3286/2582   --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 2 --timeout=3 --tries=3 --random-wait;
    sleep 31;
    # El mariachi VS Zolmeister
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/3286/148 --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 2 --timeout=3 --tries=3 --random-wait;
    sleep 31;
    # El mariachi VS 
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/3286/? --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 2 --timeout=3 --tries=3 --random-wait;
    sleep 1;
    # DojoBOT_0.1 VS TAIWAN BOT (#1)
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/4662/3668 --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 2 --timeout=3 --tries=3 --random-wait;
    let COUNTER=COUNTER+1;
    sleep 29;
done