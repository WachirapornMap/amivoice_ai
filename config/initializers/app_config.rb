#
# Configuration
#
APP_CONFIG = {
  :asr_file_word_AmiDnnThai                       => 'AmiDnnThaiTelephony8k_BKI_GLMv31_4g',
  :asr_profiles_rcd                               => '/profiles/user.rcd',
  :asr_file_name_production                       => 'AmiDnnThaiTelephony8k_Bay_GLMcleanDict_v6',
  :password_decrypt                               => 'password',
  #:ami_tuning_tools                               => 'http://192.168.1.40/report/',
  :path_tmp_releases                              => '/tmp/releases/',
  :path_tmp_releases_nlu                          => '/tmp/releases/NLU/',
  :path_tmp_releases_asr                          => '/tmp/releases/ASR/' 
  
}
config_fname = APP_CONFIG[:config_filename] || "/etc/aminets/settings.yml"
if File.exist? config_fname
aminets_config = YAML::load_file config_fname
APP_CONFIG.merge! aminets_config
end
