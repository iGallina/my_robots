#!/bin/bash
COUNTER=0
while [  true ]; do
    echo Rodando $COUNTER;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/fed9e91d9c2d9bcd7322  --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 1 --timeout=3 --random-wait;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/6b0f924b9cec297b33cb  --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 1 --timeout=3 --random-wait;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/c0c72973e35962db255a/249a7a101f8069f94d96  --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 1 --timeout=3 --random-wait;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/fight/2582 --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 1 --timeout=3 --random-wait;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/a9514dd4965d43479b18 --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 1 --timeout=3 --random-wait;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/c0c72973e35962db255a --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 1 --timeout=3 --random-wait;
    wget -x --load-cookies cookies.txt http://fightcodegame.com/robots/randomfight/4242547  --user-agent="Mozilla/5.0 Macintosh Intel Mac OS X 10_8_2 AppleWebKit/537.11 KHTML, like Gecko Chrome/23.0.1271.95 Safari/537.11" --max-redirect 1 --timeout=3 --random-wait;
    let COUNTER=COUNTER+1;
done