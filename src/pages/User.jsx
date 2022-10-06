import {useContext,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Card, Col, Container, Figure, Badge,Row,Button,Toast,Placeholder} from 'react-bootstrap'
import {
  FaArrowLeft,
  FaUsers,
  FaUserFriends,
  FaCodepen,
  FaStore,
} from "react-icons/fa";
import Spinner from '../components/users/Loader'
import GithubContext from '../components/context/github/GithubContext'
import { getUserandRepos} from '../components/context/github/GithubAction'
import RepoList from '../components/repo/RepoList';

const User = () => {
  const {dispatch, loading, user,repos } = useContext(GithubContext);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  const params = useParams()
  useEffect(() => {
    dispatch({type:"SET_LOADING"})

    const getUserData = async () =>{
      const userData = await getUserandRepos(params.login)
      dispatch({
        type:"GET_USER_AND_REPOS",
        payload:userData
      })

      
    }
    getUserData()
    
  }, [dispatch,params.login]);

    if(!loading){

        return (
          <Container>
            <div className="user-back mb-4">
              <Link to="/">
                <FaArrowLeft />
                {""} Back to home
              </Link>
            </div>
            <Row>
              <Col>
                <div className="user-img">
                  <Card className="shadow-lg">
                    <Card.Img src={avatar_url} alt="user" />
                    <Card.ImgOverlay className="img-overlay">
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{login}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                  <div className="user-content">
                    <div className="user-title">
                      <h2>{name}</h2>
                      <span>
                        <Badge bg="secondary">{type}</Badge>
                      </span>{" "}
                      <span>
                        {hireable && <Badge bg="secondary">Hireable</Badge>}
                      </span>
                    </div>
                    <div className="user-body">
                      <p>{bio}</p>
                    </div>
                    <div className="user-btn">
                      <Button variant="outline-primary">
                        <a href={html_url} target="_blank" rel="noreferrer">
                          VISIT GITHUB PROFILE
                        </a>
                      </Button>
                    </div>
                    <div className="stats-sect">
                      {location && (
                        <Toast>
                          <Toast.Header closeButton={false}>
                            <strong className="me-auto">Location</strong>
                          </Toast.Header>
                          <Toast.Body>{location}</Toast.Body>
                        </Toast>
                      )}

                      {blog && (
                        <Toast>
                          <Toast.Header closeButton={false}>
                            <strong className="me-auto">Website</strong>
                          </Toast.Header>
                          <Toast.Body>
                            <a
                              href={`https://${blog}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {blog}{" "}
                            </a>
                          </Toast.Body>
                        </Toast>
                      )}

                      {twitter_username && (
                        <Toast>
                          <Toast.Header closeButton={false}>
                            <strong className="me-auto">Twitter</strong>
                          </Toast.Header>
                          <Toast.Body>
                            <a
                              href={`https://twitter.com/${twitter_username}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {twitter_username}{" "}
                            </a>
                          </Toast.Body>
                        </Toast>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Placeholder
                  size="lg"
                  className="w-100 mt-4 placeholderbg shadow-lg p-2"
                >
                  <div className="stat-container">
                    <div className="stat">
                      <div className="stat-figure">
                        <FaUsers color="#2777E3" size="30" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-title">Followers</div>
                        <div className="stat-title text-lg">{followers}</div>
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-figure">
                        <FaUserFriends color="#2777E3" size="30" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-title">Following</div>
                        <div className="stat-title text-lg">{following}</div>
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-figure">
                        <FaCodepen color="#2777E3" size="30" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-title">Public Repos</div>
                        <div className="stat-title text-lg">{public_repos}</div>
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-figure">
                        <FaStore color="#2777E3" size="30" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-title">Public gists</div>
                        <div className="stat-title text-lg">{public_gists}</div>
                      </div>
                    </div>
                  </div>
                </Placeholder>
              </Col>
            </Row>
            <Row>
            <Col>
            <RepoList repos={repos}/>
            </Col>
            
            </Row>
          </Container>
        );
    }else{
        return <Spinner />
    }
};
export default User
