-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    prescription_image_url TEXT,
    medication_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    special_instructions TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all authenticated users to view their own orders
CREATE POLICY "Users can view their own orders" ON orders
    FOR SELECT
    USING (auth.uid() = customer_id);

-- Create a policy that allows users to create orders
CREATE POLICY "Users can create orders" ON orders
    FOR INSERT
    WITH CHECK (true);

-- Create an update policy that only allows updating the status field
CREATE POLICY "Only allow status updates" ON orders
    FOR UPDATE
    USING (true)
    WITH CHECK (
        (OLD.status IS DISTINCT FROM NEW.status) AND
        (OLD.customer_name = NEW.customer_name) AND
        (OLD.email = NEW.email) AND
        (OLD.phone = NEW.phone) AND
        (OLD.address = NEW.address) AND
        (OLD.city = NEW.city) AND
        (OLD.state = NEW.state) AND
        (OLD.postal_code = NEW.postal_code) AND
        (OLD.country = NEW.country) AND
        (OLD.prescription_image_url = NEW.prescription_image_url) AND
        (OLD.medication_name = NEW.medication_name) AND
        (OLD.quantity = NEW.quantity) AND
        (OLD.special_instructions = NEW.special_instructions)
    );
