#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>

// Maximum message body length
enum { max_body_length = 512 };

// Structure to hold chat messages
class chat_message {
public:
    chat_message()
        : body_length_(0)
    {
    }

    // Get a pointer to the raw message data for reading
    const char* data() const {
        return data_;
    }

    // Get a mutable pointer to the raw message data for writing
    char* data() {
        return data_;
    }

    // Get the total length of the message (header + body)
    size_t length() const {
        return header_length + body_length_;
    }

    // Get a pointer to the message body
    const char* body() const {
        return data_ + header_length;
    }

    // Get a mutable pointer to the message body
    char* body() {
        return data_ + header_length;
    }

    // Get the length of the message body
    size_t body_length() const {
        return body_length_;
    }

    // Set the length of the message body
    void body_length(size_t new_length) {
        body_length_ = new_length;
        if (body_length_ > max_body_length)
            body_length_ = max_body_length;
    }

    // Decode the message header to get the body length
    bool decode_header() {
        char header[header_length + 1] = "";
        std::strncat(header, data_, header_length);
        body_length_ = std::atoi(header);
        if (body_length_ > max_body_length) {
            body_length_ = 0;
            return false;
        }
        return true;
    }

    // Encode the message header with the body length
    void encode_header() {
        char header[header_length + 1] = "";
        std::sprintf(header, "%4d", static_cast<int>(body_length_));
        std::memcpy(data_, header, header_length);
    }

private:
    char data_[header_length + max_body_length];
    size_t body_length_;
    enum { header_length = 4 };
};
