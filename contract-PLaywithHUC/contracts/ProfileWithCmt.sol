// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GamerProfileWithComments {
    struct Profile {
        uint256 profileId;
        uint256 hourlyRate;
        string username;
        string bio;
        address owner;
        uint256 createdAt;
    }

    struct Comment {
        address commenter;
        uint8 rating;
        string commentText; 
        uint256 createdAt;
    }

    struct Hire {
        address hirer;
        uint256 duration; // Thời gian thuê (số giờ)
        uint256 amountPaid; // Tổng số tiền đã trả
        uint256 createdAt;
    }

    mapping(uint256 => Profile) public profiles;
    mapping(uint256 => Comment[]) public comments;
    mapping(uint256 => Hire[]) public hires; // Thông tin thuê liên kết với từng hồ sơ

    uint256 public profileCount;

    // Tạo hồ sơ người chơi
    function createProfile(uint256 _hourlyRate, string memory _username, string memory _bio) public {
        profiles[profileCount] = Profile({
            profileId: profileCount,
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

    // Thuê người chơi
    function hirePlayer(uint256 _profileId, uint256 _duration) public payable {
        require(_profileId < profileCount, "Profile does not exist");
        require(_duration > 0, "Duration must be greater than 0");

        Profile memory profile = profiles[_profileId];
        uint256 totalCost = profile.hourlyRate * _duration;

        require(msg.value >= totalCost, "Insufficient payment");

        hires[_profileId].push(Hire({
            hirer: msg.sender,
            duration: _duration,
            amountPaid: msg.value,
            createdAt: block.timestamp
        }));

        // Chuyển tiền cho chủ sở hữu hồ sơ
        payable(profile.owner).transfer(msg.value);
    }

    // Lấy thông tin thuê
    function getHires(uint256 _profileId) public view returns (Hire[] memory) {
        require(_profileId < profileCount, "Profile does not exist");
        return hires[_profileId];
    }
}
