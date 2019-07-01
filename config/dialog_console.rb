module Blacksmith
    class DialogConsole < Rails::Application
      config.prompt_dir = '/var/aminets/amivoice_master_prompts/'
      config.sync_nodes = []
      config.dialog_console_site = 'https://localhost:3000/amivoice_ai'
  
        config.tuning_tools_site = 'https://localhost:3000'
      #config.tuning_tools_site = 'https://172.24.132.140/report'
      config.route_sites = [{key: "CW",text: "CW"}, {key: "RT",text: "RT"}]
    end
  end