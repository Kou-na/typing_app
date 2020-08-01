module DeviseHelper
  def name_error_message
    return "" if resource.errors.empty?

    html = ""
    name_error = resource.errors.full_messages_for(:name).first
    html += <<-EOF
    <div class="Form__error">
      #{name_error}
    </div>
    EOF
    html.html_safe
  end

  def email_error_message
    return "" if resource.errors.empty?

    html = ""
    email_error = resource.errors.full_messages_for(:email).first
    html += <<-EOF
    <div class="Form__error">
      #{email_error}
    </div>
    EOF
    html.html_safe
  end

  def password_error_message
    return "" if resource.errors.empty?

    html = ""
    password_error = resource.errors.full_messages_for(:password).first
    html += <<-EOF
    <div class="Form__error">
      #{password_error}
    </div>
    EOF
    html.html_safe
  end

  def name_error_message
    return "" if resource.errors.empty?

    html = ""
    name_error = resource.errors.full_messages_for(:name).first
    html += <<-EOF
    <div class="Form__error">
      #{name_error}
    </div>
    EOF
    html.html_safe
  end

  

  def devise_error_messages?
    resource.errors.empty? ? false : true
  end

end