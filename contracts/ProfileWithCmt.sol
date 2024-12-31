// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GamerProfileWithComments {
    struct Profile {
        uint256 hourlyRate;
        string username;
        string bio;
        address owner;
        uint256 createdAt;
    }

    struct Comment {
        address commenter;
        uint8 rating;
        string commentText; // Thay URI bằng text trực tiếp
        uint256 createdAt;
    }

    mapping(uint256 => Profile) public profiles;
    mapping(uint256 => Comment[]) public comments;

    uint256 public profileCount;

    // Tạo hồ sơ người chơi
    function createProfile(uint256 _hourlyRate, string memory _username, string memory _bio) public {
        profiles[profileCount] = Profile({
            hourlyRate: _hourlyRate,
            username: _username,
            bio: _bio,
            owner: msg.sender,
            createdAt: block.timestamp
        });
        profileCount++;
    }

    // Thêm bình luận
    function addComment(uint256 _profileId, uint8 _rating, string memory _commentText) public {
        require(_profileId < profileCount, "Profile does not exist");
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");

        comments[_profileId].push(Comment({
            commenter: msg.sender,
            rating: _rating,
            commentText: _commentText,
            createdAt: block.timestamp
        }));
    }

    // Lấy bình luận
    function getComments(uint256 _profileId) public view returns (Comment[] memory) {
        require(_profileId < profileCount, "Profile does not exist");
        return comments[_profileId];
    }
}
