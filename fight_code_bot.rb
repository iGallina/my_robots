# encoding: utf-8

require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'

Capybara.run_server = false
Capybara.current_driver = :poltergeist
Capybara.javascript_driver = :poltergeist

# delay pro JS carregar
Capybara.default_wait_time = 5

include Capybara::DSL
base_url = "http://fightcodegame.com"
url = "robots/randomfight/c0c72973e35962db255a"
begin
    Capybara.app_host = base_url
    while true do
        visit(url)
        if page.url.contains?('timeout')
            sleep(15.seconds)
            return
        end
        if page.body.contains?('Application')
           return
        end
        sleep(31.seconds)
    end
rescue Capybara::Poltergeist::TimeoutError
    puts "\t[ERRO] Timeout ao acessar o site #{base_url}#{url}."
    search base_url, url
rescue Capybara::Poltergeist::JavascriptError
    puts "\t[ERRO] Javascript quebrado no site #{base_url}#{url}."
    search base_url, url
rescue Capybara::ElementNotFound
    puts "\t[ERRO] Página não respondendo ou Elemento não encontrado no site #{base_url}#{url}."
    search base_url, url
end