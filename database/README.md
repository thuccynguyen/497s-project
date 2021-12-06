# Database

## Tables and Fields

- Users
    - userId
    - username
    - password
- Posts
    - userId
    - postId
    - post
    - tag
- Comments
    - commentId
    - postId
    - comment
    - status
- Likes
    - postId
    - liked
    - totalLikes

## Connection Instructions

```
sh start.sh
docker exec -it db-container bash
psql -h localhost -U postgres
```