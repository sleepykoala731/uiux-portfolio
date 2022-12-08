import { useEffect, useState } from "react";
import "./App.css";
import {
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Divider,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ButtonGroup,
  SlideFade,
} from "@chakra-ui/react";

function OpenInfoModal(
  projectTitle: string,
  contextProblem: any,
  researchFeedback: any,
  designIterations: any,
  conclusion: any
) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Project Info
      </Button>

      <Modal isOpen={isOpen} size={"3xl"} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>{projectTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h4" size="sm" mb={1}>
              Context/Problem
            </Heading>
            <Text mb={3}>{contextProblem}</Text>
            <Heading as="h4" size="sm" mb={1}>
              Research/Feedback
            </Heading>
            <Text mb={3}>{researchFeedback}</Text>
            <Heading as="h4" size="sm" mb={1}>
              Design Iterations
            </Heading>
            <Text mb={3}>{designIterations}</Text>
            <Heading as="h4" size="sm" mb={1}>
              Conclusion
            </Heading>
            <Text mb={3}>{conclusion}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function App() {
  const [fadeInOne, setFadeInOne] = useState(false);
  const [fadeInTwo, setFadeInTwo] = useState(false);
  const [fadeInThree, setFadeInThree] = useState(false);
  const [fadeInFour, setFadeInFour] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInOne(true);
    }, 250);

    const timer2 = setTimeout(() => {
      setFadeInTwo(true);
    }, 500);

    const timer3 = setTimeout(() => {
      setFadeInThree(true);
    }, 750);

    const timer4 = setTimeout(() => {
      setFadeInFour(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Heading as="h1" size="2xl" mb={20}>
          Hi, I'm{" "}
          <a className="name-gradient" href="https://github.com/sleepykoala731">
            Sleepy Koala
          </a>
          🐨 Welcome to my portfolio!
        </Heading>
      </div>
      <div className="Introduction">
        <Text mb={20} fontSize="xl">
          I'm a UI/UX designer and front-end developer who loves to build
          approachable and accessible web interfaces. Below, you can find some
          examples of my work, including a fun pokemon team-building app and an
          interface design for a UI/UX education startup. If a project has a
          "project details" button, you can click it to learn more about my
          process in creating the project. Otherwise, details about the
          project's creation can be found on the project site itself. Thanks for
          stopping by!
        </Text>
        {/* <Divider
          orientation="vertical"
          colorScheme={"whiteAlpha"}
          size="xl"
          height={"10rem"}
        />
        <Text mb={20} fontSize="xl">
          Test
        </Text> */}
      </div>
      <SimpleGrid
        spacing={"2rem"}
        templateColumns="repeat(auto-fill, minmax(25rem, 1fr))"
      >
        <SlideFade in={fadeInOne} offsetY="40px">
          <Card backgroundColor={"whiteAlpha.600"}>
            <CardBody>
              <a href="https://sleepykoala731.github.io/uiux-development/">
                <Image
                  src="/pokemon-preview.jpg"
                  alt="Preview of the Pokemon Team Builder app"
                  borderRadius="lg"
                  className="project-image"
                />
              </a>
              <Stack mt="6" spacing="3">
                <div className="project-title">
                  <Heading size="md">Pokemon Team Builder 🎮</Heading>
                </div>
                <Text>
                  This react app allows users to browse a selection of pokemon
                  and build a team of pokemon to calculate the team's total base
                  stats.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignSelf={"center"}>
              <ButtonGroup>
                <a href="https://sleepykoala731.github.io/uiux-development/">
                  <Button variant="solid" colorScheme="purple">
                    View Project
                  </Button>
                </a>
                {OpenInfoModal(
                  "Pokemon Team Builder",
                  <div className="Context-Problem">
                    <p>
                      This app is a react project that allows the user to browse
                      a collection of pokemon and view basic info about each
                      pokemon, like their type(s), generation, and total base
                      stats. The app allows the user to sort this collection by
                      pokedex number, height, and weight, and filter the
                      collection by type and generation. The app also allows the
                      user to build a team of pokemon, which calculates the
                      team's total base stats. While some online podedexes
                      contain a lot of information on all of the pokemon, this
                      app is designed to be a quick and easy way to browse a
                      selection of pokemon with a new team-building feature.
                    </p>
                  </div>,
                  <div className="Research-Feedback">
                    <p>
                      To research existing online pokemon databases, I looked at
                      a few different websites, including{" "}
                      <a href="https://www.pokemon.com/us/pokedex/">
                        {" "}
                        Pokemon.com
                      </a>
                      ,{" "}
                      <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number">
                        Bulbapedia
                      </a>
                      , and{" "}
                      <a href="https://pokemondb.net/pokedex/all">PokemonDB</a>.
                      Each of these websites had a different approach to
                      displaying pokemon data -- I appreciated the layout and
                      sorting/filtering options on Pokemon.com, the amount of
                      detail for each pokemon page on Bulbapedia, and the
                      availability of base stat data on PokemonDB. For the
                      Pokemon Team Builder app, I wanted to combine the best
                      aspects of these different approaches into the app's
                      design, while adding a new team-building feature.
                    </p>
                    <Image className="pokemon-card" src="/pikachu.jpg" />
                  </div>,
                  <div className="Design-Iterations">
                    <p>
                      I initially constructed the app to have a vertical list of
                      pokemon (similar to the layouts of Bulbapedia and
                      PokemonDB) rather than a collection of cards for each, but
                      later decided to switch to the card layout (similar to
                      Pokemon.com) to make the app more visually interesting
                      with larger pictures of the pokemon, as well as reference
                      the format of pokemon trading cards, where the picture of
                      the pokemon takes up the top half of the card, and
                      information about the pokemon is found on the bottom half
                      of the card.
                    </p>
                    <Image
                      className="pokemon-card"
                      src="https://assets.pokemon.com/assets/cms2/img/cards/web/XY8/XY8_EN_48.png"
                    />
                  </div>,
                  <div className="Conclusion">
                    <p>
                      Creating this app was a great way to practice with react
                      and learn more about the different online sources for
                      information on pokemon!
                    </p>
                  </div>
                )}
              </ButtonGroup>
            </CardFooter>
          </Card>
        </SlideFade>

        <SlideFade in={fadeInTwo} offsetY="40px">
          <Card backgroundColor={"whiteAlpha.600"}>
            <CardBody>
              <a href="https://cheerfuldragonfly182.github.io/iterative/">
                <Image
                  src="/iterative-preview.jpg"
                  alt="Preview of the Iterative Design project"
                  borderRadius="lg"
                  className="project-image"
                />
              </a>
              <Stack mt="6" spacing="3">
                <Heading size="md">Avocademy Iterative Design 🥑</Heading>
                <Text>
                  This project involved a prototype and design for Avocademy, a
                  UI/UX design education startup.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignSelf={"center"}>
              <a href="https://cheerfuldragonfly182.github.io/iterative/">
                <Button variant="solid" colorScheme="purple">
                  View Project
                </Button>
              </a>
            </CardFooter>
          </Card>
        </SlideFade>

        <SlideFade in={fadeInThree} offsetY="40px">
          <Card backgroundColor={"whiteAlpha.600"}>
            <CardBody>
              <a href="https://responsive-redesign-site.pages.dev/">
                <Image
                  src="/responsive-preview.jpg"
                  alt="Preview of the Responsive Redesign  project"
                  borderRadius="lg"
                  className="project-image"
                />
              </a>
              <Stack mt="6" spacing="3">
                <Heading size="md">Responsive Redesign 📱</Heading>
                <Text>
                  This project involved recreating a the landing page of the
                  Chicago City Council Legistar website using a responsive,
                  mobile-compatible design.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignSelf={"center"}>
              <a href="https://responsive-redesign-site.pages.dev/">
                <Button variant="solid" colorScheme="purple">
                  View Project
                </Button>
              </a>
            </CardFooter>
          </Card>
        </SlideFade>

        <SlideFade in={fadeInFour} offsetY="40px">
          <Card backgroundColor={"whiteAlpha.600"}>
            <CardBody>
              <a href="https://personas-project.pages.dev/">
                <Image
                  src="/personas-preview.jpg"
                  alt="Preview of the Personas project"
                  borderRadius="lg"
                  className="project-image"
                />
              </a>
              <Stack mt="6" spacing="3">
                <Heading size="md">Personas 👤</Heading>
                <Text>
                  This project involved researching personas for different users
                  of a coffee machine interface.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignSelf={"center"}>
              <a href="https://personas-project.pages.dev/">
                <Button variant="solid" colorScheme="purple">
                  View Project
                </Button>
              </a>
            </CardFooter>
          </Card>
        </SlideFade>
      </SimpleGrid>
    </div>
  );
}

export default App;
