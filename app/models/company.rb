# frozen_string_literal: true

class Company < ActiveRecord::Base
  has_many :operations,
    inverse_of: :company

  validates :name,
    presence: true

  def average_amount
    operations.average(:amount) || 0.0
  end

  def highest_operation_in_current_month
    operations.in_current_month.maximum(:amount) || 0.0
  end

  def accepted_operations
    operations.accepted.count
  end
end
