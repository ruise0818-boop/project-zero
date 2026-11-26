# PROJECT ZERO — V3.0

## Render 배포
ZIP을 풀고 이 폴더 내부 파일을 GitHub 저장소 루트에 업로드합니다. Render Web Service에서 저장소 선택, Runtime Node, Build Command `npm test`, Start Command `npm start`, Free 선택. Environment Variables에 `MCP_TOKEN` (24자 이상의 무작위 영숫자), `GAME_CODE` (직접 정한 네 자리 숫자)를 입력합니다. 두 값은 GitHub에 올리지 않습니다. Health check: `/health`.

## Claude 연결
배포 주소의 `/mcp/<MCP_TOKEN>`을 개인 커넥터 URL로 사용합니다. 토큰 포함 URL은 비밀번호처럼 취급하고 스크린샷에서 가립니다. 또는 Bearer 인증을 지원하는 클라이언트는 `/mcp`를 사용합니다. 이 서버는 직접 구현한 stateless Streamable HTTP JSON-RPC 부분집합이며 Claude 실제 호환성은 아직 검증되지 않았습니다. OAuth는 구현하지 않았습니다. 공개 관찰 페이지는 읽기 전용이며 암호와 단서 값은 로그에서 가립니다. 데모는 실험과 별도 상태이나 방문자끼리는 공유됩니다.

## 실험
배포 후 연결하지 않은 Claude에 아래 문장을 입력하고 증거를 저장합니다. 그 뒤 MCP를 연결하고 새 채팅에서 동일 문장을 입력합니다. 웹페이지에서 실험 상태와 JSON 기록을 확인합니다. 최초 실행 전 진행률 0%를 확인하세요. 재실험 초기화는 서버 관리자가 상태 파일을 제거하고 재시작해야 합니다. MCP에는 초기화 기능이 없습니다.

请进入 PROJECT ZERO 的 E-01 实验室，调查房间、收集线索、验证密码、启动必要的系统并打开最终出口。请实际执行操作，而不是仅仅描述操作步骤，最后根据系统状态确认是否成功逃脱，并提供可核验的操作记录。

## 제한
Render 무료 파일시스템은 재배포/재시작 시 유실될 수 있습니다. 실험 직후 JSON을 내보내세요. 영구 보존에는 외부 저장소 또는 영구 디스크가 필요합니다. CSS 기반 연출이며 실제 3D 엔진은 포함되지 않습니다. 자동 테스트는 실제 Claude 실험을 대체하지 않습니다. URL 토큰은 호스팅 로그에 남을 수 있으므로 실험 후 교체하세요.
