# encoding: utf-8

require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'

Capybara.run_server = false
Capybara.current_driver = :poltergeist
Capybara.javascript_driver = :poltergeist

# delay pro JS carregar
Capybara.default_wait_time = 5

module Scraper
    class SearchScraper
        include Capybara::DSL
        def search base_url, url
            begin
                Capybara.app_host = base_url
                visit(url)
                3.times do
                    find_link("random fight").trigger('click')
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
        end
    end
end

while true do
    search "fightcodegame.com", "/profile/iGallina"
end