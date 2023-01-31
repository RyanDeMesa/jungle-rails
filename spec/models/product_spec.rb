require 'rails_helper'

# RSpec.describe Product, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end

RSpec.describe Product, type: :model do


  describe 'Validations' do

    before (:each) do
      @category = Category.new(name: "category1")
    end

    it 'the product has all' do
      @product = Product.new(name: "producct1", price_cents: 20, quantity: 20, category: @category)
      @product.save
      expect(@product).to be_present
    end

    it 'the product has a name' do
      @product = Product.new(name: nil, price_cents: 0, quantity: 20, category: @category)
      @product.save
      expect(@product.errors.full_messages).to include("Name can't be blank")
    end

    it 'the product has a price' do
      @product = Product.new(name: "producct1", price_cents: nil, quantity: 20, category: @category)
      @product.save
      expect(@product.errors.full_messages).to include("Price is not a number")
    end

    it 'the product has a quantity' do
      @product = Product.new(name: "producct1", price_cents: 1090, quantity: nil, category: @category)
      @product.save
      expect(@product.errors.full_messages).to include("Quantity can't be blank")
    end

    it 'the product has a category' do
      @product = Product.new(name: "producct1", price_cents: 1090, quantity: 20, category: nil)
      @product.save
      expect(@product.errors.full_messages).to include("Category can't be blank")
    end


  end
end