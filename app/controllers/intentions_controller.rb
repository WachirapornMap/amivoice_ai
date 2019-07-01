class IntentionsController < ApplicationController
  def index
    @intention = Intention.select_all
    return respond_to do |format| 
          format.html { render :index } 
          format.json { render json: IntentionDatatable.new(view_context)}
        end  
  end

  def new
     @@state = 'new'
     @intention = Intention.new
     @submit_bt = 'Add'
  end

  def edit
    @@state = 'edit'
     @intention = Intention.find(params[:id])
     @submit_bt = 'Update'
  end

  def create
    intention_name = params[:intention][:intention_name].downcase
    intention_tag = params[:intention][:intention_tag].downcase
    intention_code = params[:intention][:intention_code]
    check_dup_intention = Intention.find_intention(intention_tag, intention_name, intention_code) 
    if check_dup_intention.blank?
        @intention = Intention.create(intention_params)
        if @intention.save
         redirect_to action: 'new'
        else
          render 'new'
        end
    else
       flash[:danger] ||= []
       flash[:danger] << "Error: Duplicated Intention!!"
       redirect_to action: 'new'
    end 
    
      
  end

  def update
    @intention = Intention.find(params[:intention][:intention_id])
    
    if @intention.update(update_intention_params)
      redirect_to action: 'index'
    else
      render 'edit'
    end
  end

  def delete_intention
    @intention = Intention.find(params[:id])
    @intention.destroy
    #redirect_back fallback_location: root_path
  end
  
  def delete_select_intention
    id = params[:id]  || [params[:select_delete].split(',')]
    @intention = Intention.find(id)
    @intention.each {|d| d.destroy} if id.instance_of? Array
    @intention.destroy if id.instance_of? String  
    redirect_back fallback_location: root_path
     
  end

    private def intention_params
      params[:intention][:created_by] = session[:current_user_id]
      params.require(:intention).permit(:intention_code, :intention_name, :intention_tag,:created_by)
    end

    private def update_intention_params
      params[:intention][:updated_by] = session[:current_user_id]
      params.require(:intention).permit(:intention_code, :intention_name, :intention_tag,:updated_by)
    end

end 
