import { useMediaQuery } from "react-responsive"

function Team() {
  const isBig = useMediaQuery({
    query: "(min-width: 970px)",
  })

  return (
    <>
      <div id="team" className="p-3">
        <div style={{ paddingTop: 20 }}></div>
        <h1 className="text-center">Our Team</h1>
        {isBig ? (
          <table className="mx-auto table table-striped text-center width-12 border">
            <tbody>
              <tr>
                <th scope="row">Professor Michael K Chan</th>
                <td>
                  High Impact Researcher (Co-discoverer of pyrrolysine - the
                  22nd genetically encoded amino acid)
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>
                  Professor at the CUHK, Previous School of Life Sciences
                  Director (PhD UC Berkeley)
                </td>
              </tr>
              <tr>
                <th scope="row">Dr. Marianne M Lee</th>
                <td>
                  Research Fellow at the CUHK (PhD in Bioinformatics &
                  Structural Biology from OSU)
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>
                  Previously Financial Officer at Nexstar Research Inc. (MBA
                  from USC)
                </td>
              </tr>
              <tr>
                <th scope="row">Mr. Howard M Lee</th>
                <td>
                  Founder & CEO of Lucas Greater China, Beijing (NASDAQ: LGCL
                  recent IPO raised USD 6m)
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <>
            <h6>Professor Michael K Chan</h6>
            <ul>
              <li>
                High Impact Researcher (Co-discoverer of pyrrolysine - the 22nd
                genetically encoded amino acid)
              </li>
              <li>
                Professor at the CUHK, Previous School of Life Sciences Director
                (PhD UC Berkeley)
              </li>
            </ul>
            <hr/ >
            <h6>Dr. Marianne M Lee</h6>
            <ul>
              <li>
                Research Fellow at the CUHK (PhD in Bioinformatics & Structural
                Biology from OSU)
              </li>
              <li>
                Previously Financial Officer at Nexstar Research Inc. (MBA from
                USC)
              </li>
            </ul>
            <hr/ >
            <h6>Mr. Howard M Lee</h6>
            <ul>
              <li>
                Founder & CEO of Lucas Greater China, Beijing (NASDAQ: LGCL
                recent IPO raised USD 6m)
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default Team
