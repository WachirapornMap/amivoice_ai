class IntentionDatatable < ApplicationDatatable
delegate  :edit_intentions_path, :intention_value_path, :new_intentions_path, :delete_intentions_path, :link_to, :button_tag, :check_box_tag, to: :@view  


  def data
    intention.map do |record|
      
        [].tap do |column|
          column << check_box_tag('f.users[]', record.id, false, onchange:"show_delete_intention()", class:"select_delete_intention")
          text = '<p hidden>'+record.id.to_s+'</p>'
          column << record.intention_code
          column << record.intention_name
          column << record.intention_tag
          column << record.updated_at.strftime("%Y-%m-%d %H:%M:%S")
          links = []
          links << link_to("description", intention_value_path(:id => record.id), method: :GET, :class => 'material-icons md-48')
          links << link_to("edit", edit_intentions_path(:id => record.id), method: :GET, :class => 'material-icons md-48')
          links << button_tag("delete_outline", type:"button", onclick:"delete_intention(#{record.id})", :class => "material-icons md-48 delete_btn")
         # links << link_to("delete_outline", onclick:"delete_intention(#{record.id})", method: :delete,  :class => 'material-icons md-48 delete_btn')       
          column << links.join('     ')
        end
        # example:
        # id: record.id,
        # name: record.name
      
    end
  end

  def count
      Intention.count
    end
  
    def total_entries
      intention.total_count
    end
  
    def intention
      @intention ||= fetch_export
    end
  
    def fetch_export
      search_string = []
      columns.each do |term|
        search_string << "#{term} like :search"
      end
      intention = Intention.order("#{sort_column} #{sort_direction}")
      intention = intention.page(page).per(per_page)
      intention = intention.where(search_string.join(' or '), search: "%#{params[:search][:value]}%")
    end
  
    def columns
      %w(id intention_name intention_tag updated_date)
    end

end
