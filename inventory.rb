#!/usr/bin/ruby

require 'json'

STDOUT.sync = true

STORE_IDS = Array(1..10)
SHOES_IDS = Array(1425..1440)
INVENTORY = Array(0..100)
RANDOMNESS = Array(1..3)

loop do
  RANDOMNESS.sample.times do
    puts JSON.generate({
      stream: "shoe-store-#{STORE_IDS.sample}",
      "shoe-#{SHOES_IDS.sample}" => INVENTORY.sample,
    }, quirks_mode: true)
  end
  sleep 1
end