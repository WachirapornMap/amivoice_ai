class Intention < ApplicationRecord

    def self.select_all
       Intention.all
    end

    def self.find_intention intention_tag, intention_name, intention_code
        Intention.where("intention_tag = ? OR intention_name = ? OR  intention_code = ?" ,intention_tag, intention_name, intention_code)
    end

end
